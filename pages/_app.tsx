import '../public/css/styles.css'

import { StyleProvider, ThemePicker } from 'vcc-ui'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyleProvider>
			<ThemePicker variant='light'>
				<Component {...pageProps} />
			</ThemePicker>
		</StyleProvider>
	)
}
