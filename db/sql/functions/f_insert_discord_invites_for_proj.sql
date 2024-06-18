create or replace function f_insert_discord_invites_for_proj(projRepoId bigint, invites t_ivals_discord_invite[])
returns VOID as $$
begin 
  with invite as (
    insert into discord_invite(discord_invite_code, guild_id, guild_name, approximate_member_count, expires_at)
    select i.discord_invite_code, i.guild_id, i.guild_name, i.approximate_member_count, i.expires_at from unnest(invites) as i
    on conflict(guild_id, discord_invite_code) do update set discord_invite_code = excluded.discord_invite_code, guild_id = excluded.guild_id, guild_name = excluded.guild_name, approximate_member_count = excluded.approximate_member_count, expires_at = excluded.expires_at returning discord_invite_id
  )
  insert into proj_repo_and_discord_invite(proj_repo_id, discord_invite_id) select projRepoId, discord_invite_id from invite on conflict(proj_repo_id, discord_invite_id) do nothing;
end;
$$ language plpgsql;