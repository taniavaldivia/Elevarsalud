import "../styles/globals.css"
import SidebarTemplate from "../components/SidebarTemplate"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SidebarTemplate component={<Component {...pageProps} />} />
    </div>
  )
}

export default MyApp
