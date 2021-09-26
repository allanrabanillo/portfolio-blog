import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className="h-[100vh] flex flex-col justify-center align-middle text-center">
          <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
            Allan Rabanillo
          </h1>
          <h2 className="text-2xl max-w-md mx-auto">
            My portfolio will be constructed here!. Coming Soon!
          </h2>
        </div>
      </main>
    </>
  )
}

export default Home
