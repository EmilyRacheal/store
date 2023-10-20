import ModalProvider from "@/providers/modal-provider";
import 'tailwindcss/tailwind.css'
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import 'react-phone-input-2/lib/style.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </MantineProvider>
  );
}
