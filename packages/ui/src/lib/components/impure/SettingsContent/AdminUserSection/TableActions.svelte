	
<script lang="ts">
	import Button from "$lib/components/pure/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/pure/ui/dropdown-menu";
    import Ellipsis from "lucide-svelte/icons/ellipsis";
    import client from '$lib/graphql/supabase/client';
	import { DeleteAdminDocument } from "$lib/graphql/supabase/generated-codegen";
	import { toast } from "svelte-sonner";
  import {adminList, adminStore} from '../adminList.svelte'
   
    export let id: string;

    const showErrorRemoving = () => {
      toast.error('Error', {
					description:
						'An error occurred while removing the admin. Please try again later.',
					action: {
						label: 'ok',
						onClick: () => {}
					}
				});
    }

    const handleRemoveAdmin = () => {
      client.mutate({
        mutation: DeleteAdminDocument,
        variables: {
          adminUuid: id
        }    
      }).then((res) => {
        if(res.data?.deleteFromUserAdminCollection?.affectedCount === 1) {
          // adminList.data?.filter((adminList) => adminList.id !== id)
          adminStore.set(`remove ${id}`);
          toast.success('Successfully Removed Admin!', {
							description: '',
							duration: 1000
						});
        } else {
          showErrorRemoving()
        }

      }).catch(() => {
        showErrorRemoving();
      })
    }
  </script>
   
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
      <Button
        variant="ghost"
        builders={[builder]}
        size="icon"
        class="relative h-8 w-8 p-0"
      >
        <span class="sr-only">Open menu</span>
        <Ellipsis class="h-4 w-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.Item onclick={handleRemoveAdmin}>
          Remove Admin
        </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  
  