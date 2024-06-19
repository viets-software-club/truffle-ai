begin;

drop
  publication if exists supabase_realtime;

create publication supabase_realtime;

commit;

-- alter
--   publication supabase_realtime add table proj_bookmark;
alter
  publication supabase_realtime add table proj_cat;
alter
  publication supabase_realtime add table proj_cat_and_proj_bookmark;
-- alter table proj_bookmark replica identity full;
alter table proj_cat replica identity full;
alter table proj_cat_and_proj_bookmark replica identity full;

