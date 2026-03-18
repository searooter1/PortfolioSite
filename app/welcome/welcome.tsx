import ProjectList from '../components/ProjectList';

export function Welcome() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <h1>Test</h1>
      <ProjectList projects={[
        {
          id: 1,
          title: 'Project 1',
          description: 'Description for project 1',
          link: '/project1'
        }
      ]} />
    </div>
  )
}