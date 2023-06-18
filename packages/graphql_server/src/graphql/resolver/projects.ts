import supabase from '../../supabase'

export const exposeProjectsData = async () => {
  const { data, error: projectsRetrievalError } = await supabase.from('project').select('*')
  projectsRetrievalError &&
    console.error('Error while getting all projects: \n', projectsRetrievalError)
  return data
}
