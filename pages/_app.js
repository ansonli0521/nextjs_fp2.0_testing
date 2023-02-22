import "../styles/globals.css";
import LayoutEN from "../components/LayoutEN";
import LayoutCH from "../components/LayoutCH";
import { useRouter } from "next/router";
import { Dropdown } from "@nextui-org/react";
import { SSRProvider } from '@react-aria/ssr';
import React from "react";

function MyApp({ Component, pageProps }) {
  const [selectedLoc, setSelectedLoc] = React.useState("EN");
  const router = useRouter();
  if (router.pathname == "/login")
    return <Component {...pageProps} />;
  if (selectedLoc == "EN")
    return (
      <SSRProvider>
        <LayoutEN>
          <Component {...pageProps} />
        </LayoutEN>
        <Dropdown>
          <Dropdown.Button flat>Locale</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions" selectedKeys={selectedLoc} onAction={setSelectedLoc}>
            <Dropdown.Item key="CH">CH</Dropdown.Item>
            <Dropdown.Item key="EN">EN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </SSRProvider>
    );
  else
    return (
      <SSRProvider>
        <LayoutCH>
          <Component {...pageProps} />
        </LayoutCH>
        <Dropdown>
          <Dropdown.Button flat>Locale</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions" selectedKeys={selectedLoc} onAction={setSelectedLoc}>
            <Dropdown.Item key="CH">CH</Dropdown.Item>
            <Dropdown.Item key="EN">EN</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </SSRProvider>
    );
}

export default MyApp;
