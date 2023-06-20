import supabase from '../../supabase'

export const exposeProjectsData = async () => {
  const { data, error: projectsRetrievalError } = await supabase.from('project').select('*')
  projectsRetrievalError &&
    console.error('Error while getting all projects: \n', projectsRetrievalError)
  return data
}

// might be used later on. The resolver that calls it had to be deleted, because it caused issues with schema stitching
