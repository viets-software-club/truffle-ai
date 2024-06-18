CREATE OR REPLACE FUNCTION f_tr_delete_unreferenced_bookmark_and_cat() RETURNS TRIGGER AS $$
DECLARE
  v_count_proj_cat_and_proj_bookmark INTEGER;
  v_count_proj_cat INTEGER;
  v_count_proj_bookmark INTEGER;
BEGIN
  SELECT COUNT(*)
  INTO v_count_proj_cat_and_proj_bookmark
  FROM proj_cat_and_proj_bookmark
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_cat
    WHERE proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
  ) OR NOT EXISTS (
    SELECT 1 FROM proj_bookmark
    WHERE proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
  );

  SELECT COUNT(*)
  INTO v_count_proj_cat
  FROM proj_cat
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_cat_and_proj_bookmark
    WHERE proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
  );

  SELECT COUNT(*)
  INTO v_count_proj_bookmark
  FROM proj_bookmark
  WHERE NOT EXISTS (
    SELECT 1 FROM proj_cat_and_proj_bookmark
    WHERE proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
  );

  IF v_count_proj_cat_and_proj_bookmark > 0 THEN
    DELETE FROM proj_cat_and_proj_bookmark
    WHERE NOT EXISTS (
      SELECT 1 FROM proj_cat
      WHERE proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
    ) OR NOT EXISTS (
      SELECT 1 FROM proj_bookmark
      WHERE proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
    );
  END IF;

  IF v_count_proj_cat > 0 THEN
    DELETE FROM proj_cat
    WHERE NOT EXISTS (
      SELECT 1 FROM proj_cat_and_proj_bookmark
      WHERE proj_cat_and_proj_bookmark.proj_cat_id = proj_cat.proj_cat_id
    );
  END IF;

  IF v_count_proj_bookmark > 0 THEN
    DELETE FROM proj_bookmark
    WHERE NOT EXISTS (
      SELECT 1 FROM proj_cat_and_proj_bookmark
      WHERE proj_cat_and_proj_bookmark.proj_bookmark_id = proj_bookmark.proj_bookmark_id
    );
  END IF;

  RETURN NULL;
END;
$$ LANGUAGE plpgsql;