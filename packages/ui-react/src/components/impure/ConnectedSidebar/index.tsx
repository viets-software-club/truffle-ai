

const transformData = (data: SidebarProjCategoriesToProjBookmarksQuery | undefined): React.ComponentProps<typeof BookmarkGroup>[] | null => {
    if (!data?.projCatCollection?.edges) return null
    return data.projCatCollection.edges.map(({node}) => {
      const items = node.projCatAndProjBookmarkCollection.edges.map(({node}) => {
        const repoName = node.projBookmark.projRepo.gthbRepo.gthbRepoName
        const ownerLogin = node.projBookmark.projRepo.gthbRepo.gthbOwner.gthbOwnerLogin
        return {
          link: `compare/${ownerLogin}/${repoName}`,
          title: node.projBookmark.projRepo.gthbRepo.gthbRepoName,
          imgSrc: node.projBookmark.projRepo.gthbRepo.gthbOwner.avatarUrl,
        }
      })
      return {
        id: node.nodeId,
        title: node.title,
        link: `compare/${node.title}`,
        linkText: 'Compare',
        items: items,
      }
    })
  }

const ConnectedSidebar = () => {
    const {data, loading} = useSidebarProjCategoriesToProjBookmarksQuery();
    const categoryArr = transformData(data);
    const content = categoryArr?.map(cat => <BookmarkGroup {...cat} />)


    return <Sidebar 
      
    
    />
}