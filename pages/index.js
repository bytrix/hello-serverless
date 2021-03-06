import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Hello, Serverless!!!!
        你好，无服务！
      </h1>

      <p className="description">
        Get started by editing... <code>pages/index.js</code>
      </p>
      <p className="description">
      The SSR app is hosted on <a href="https://cloud.tencent.com/product/ssr" target="_blank" rel="noopener noreferrer">Serverless SSR</a>
      </p>
    </main>
  </div>
)

export default Home
