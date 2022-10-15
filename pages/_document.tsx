import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		// const page = await ctx.renderPage();
		const initialProps = await Document.getInitialProps(ctx);
		// const styles = extractCritical(page.html);
		resetServerContext(); 
		return { ...initialProps };
	}

	render() {

		return (
			<Html>
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
