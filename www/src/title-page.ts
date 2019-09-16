
// Import LitElement base class and html helper function
import { html, LitElement } from "lit-element";
import { sharedStyles } from "./style/shared-styles";

export class TitlePage extends LitElement {

	/**
	* Define a template for the new element by implementing LitElement's
	* `render` function. `render` must return a lit-html TemplateResult.
	*/
	public render() {
		return html`

		<style>
			${sharedStyles}

			:host { 
				display: block;
				font-family: sans-serif;

				margin: 32px 0 0 0;
			}
			:host([hidden]) { display: none; }

			.container {
				display: flex;
				flex-direction: row;
				padding: 24px 10%;
				box-sizing: border-box;
				position: relative;
				width: 100%;
				justify-content: center;
			}

			.header {
				width: 100%;
				text-align: center;
				display: flex;
    			align-items: center;
				color: white;

				flex: 1;

				border-top-left-radius: 16px;
				border-bottom-left-radius: 16px;

				background-color: blue;
				box-shadow:
					inset 60px 0 120px darkblue,
					inset -60px 0 120px darkblue;
				-moz-box-shadow:
					inset 60px 0 120px darkblue,
					inset -60px 0 120px darkblue;
				-webkit-box-shadow:
					inset 60px 0 120px darkblue,
					inset -60px 0 120px darkblue;
			}

			.inner-header {
				padding: 0 32px;
				flex: 1;
			}

			.box {
				width: 50%;
				flex: 1;
				border-top-right-radius: 16px;
				border-bottom-right-radius: 16px;
			}

			.overlay {
				position: absolute;
				bottom: 24px;
				padding: 16px;
				color: black;
				font-weight: bold;
				right: 10%;
				text-align: right;
				background-color: #FED88F;

				border-top-left-radius: 16px;
				border-bottom-right-radius: 16px;
			}

			@media only screen and (max-width: 1220px) {
				.container {
					flex-direction: column;
					align-items: center;
				}

				.box {
					width: 100%;
					border-top-right-radius: 0;
					border-top-left-radius: 0;
					border-bottom-right-radius: 16px;
					border-bottom-left-radius: 16px;
				}

				.header {
					border-top-right-radius: 16px;
					border-top-left-radius: 16px;
					border-bottom-right-radius: 0;
					border-bottom-left-radius: 0;
				}
			}

			@media only screen and (max-width: 600px) {
				:host {
					margin: 64px 0 0 0;
				}

				.container {
					padding: 24px 0;
				}

				.overlay {
					right: 0;
				}
			}

		</style>

		<div class="container">
			<div class="header">
				<div class="inner-header">
					<h1>New Brunswick Provincial Improvement Framework:</h1>
					<h2>A Collaborative Process for Schools, Districts and the Province</h2>
				</div>
			</div>
			<img class="box" src="./manifest/title-page.jpg"/>

			<div class="overlay">
				Department of Education & Early Childhood Development
				<br>
				10-Year Education Implementation Planning Team
				<br>
				DRAFT as of June 20, 2019
			</div>

		</div>
		`;
	}
	
}
// Register the element with the browser
customElements.define("title-page", TitlePage);