const vscode = require("vscode");

const documentSelector = {scheme: "file", language: "review-starter"};

class BlockMethodCompletionItemProvider {
	provideCompletionItems(document, position, token) {
		// position.line -> 現在の行数
		// position.character -> 現在の行の行頭からカーソルまでの文字数
		// document.lineAt(position).text.substr(0, position.character);
		//  -> 現在の行の行頭からカーソルまでの文字列
		const TextFromLineHeadToCursor = document.lineAt(position).text.substr(0, position.character);
		if (TextFromLineHeadToCursor !== "//") {
			return undefined;
		}
		const completionItems = [
			{label: "chapterauthor", kind: vscode.CompletionItemKind.Field},
			{label: "output", kind: vscode.CompletionItemKind.Field},
			{label: "talklist", kind: vscode.CompletionItemKind.Field},
			{label: "talk", kind: vscode.CompletionItemKind.Field},
			{label: "needvspace", kind: vscode.CompletionItemKind.Field},
			{label: "vspace", kind: vscode.CompletionItemKind.Field},
			{label: "desclist", kind: vscode.CompletionItemKind.Field},
			{label: "desc", kind: vscode.CompletionItemKind.Field},
			{label: "vspace", kind: vscode.CompletionItemKind.Field},
			{label: "imgtable", kind: vscode.CompletionItemKind.Field},
			{label: "cmd", kind: vscode.CompletionItemKind.Field},
			{label: "makechaptitlepage", kind: vscode.CompletionItemKind.Field},
			{label: "sampleoutputbegin", kind: vscode.CompletionItemKind.Field},
			{label: "sampleoutputend", kind: vscode.CompletionItemKind.Field},
			{label: "abstract", kind: vscode.CompletionItemKind.Field},
			{label: "list", kind: vscode.CompletionItemKind.Field},
			{label: "listnum", kind: vscode.CompletionItemKind.Field},
			{label: "emlist", kind: vscode.CompletionItemKind.Field},
			{label: "emlistnum", kind: vscode.CompletionItemKind.Field},
			{label: "terminal", kind: vscode.CompletionItemKind.Field},
			{label: "footnote", kind: vscode.CompletionItemKind.Field},
			{label: "image", kind: vscode.CompletionItemKind.Field},
			{label: "numberlessimage", kind: vscode.CompletionItemKind.Field},
			{label: "graph", kind: vscode.CompletionItemKind.Field},
			{label: "note", kind: vscode.CompletionItemKind.Field},
			{label: "table", kind: vscode.CompletionItemKind.Field},
			{label: "tsize", kind: vscode.CompletionItemKind.Field},
			{label: "texequation", kind: vscode.CompletionItemKind.Field},
			{label: "noindent", kind: vscode.CompletionItemKind.Field},
			{label: "blankline", kind: vscode.CompletionItemKind.Field},
			{label: "paragraphend", kind: vscode.CompletionItemKind.Field},
			{label: "memo", kind: vscode.CompletionItemKind.Field},
			{label: "tip", kind: vscode.CompletionItemKind.Field},
			{label: "info", kind: vscode.CompletionItemKind.Field},
			{label: "warning", kind: vscode.CompletionItemKind.Field},
			{label: "important", kind: vscode.CompletionItemKind.Field},
			{label: "caution", kind: vscode.CompletionItemKind.Field},
			{label: "notice", kind: vscode.CompletionItemKind.Field},
			{label: "indepimage", kind: vscode.CompletionItemKind.Field},
			{label: "sideimage", kind: vscode.CompletionItemKind.Field},
			{label: "quote", kind: vscode.CompletionItemKind.Field},
			{label: "clearpage", kind: vscode.CompletionItemKind.Field},
			{label: "flushright", kind: vscode.CompletionItemKind.Field},
			{label: "centering", kind: vscode.CompletionItemKind.Field},
			{label: "embed", kind: vscode.CompletionItemKind.Field},
			{label: "bibpaper", kind: vscode.CompletionItemKind.Field},
			{label: "comment", kind: vscode.CompletionItemKind.Field},
			{label: "program", kind: vscode.CompletionItemKind.Field},
			{label: "source", kind: vscode.CompletionItemKind.Field},
			{label: "lead", kind: vscode.CompletionItemKind.Field},
			{label: "read", kind: vscode.CompletionItemKind.Field},
			{label: "raw", kind: vscode.CompletionItemKind.Field},
			{label: "read", kind: vscode.CompletionItemKind.Field},
		];
		let completionList = new vscode.CompletionList(completionItems, false);
		return Promise.resolve(completionList);
	}
}
class InlineMethodCompletionItemProvider {
	provideCompletionItems(document, position, token) {
		const completionItems = [
			{label: "<ins>", kind: vscode.CompletionItemKind.Field},
			{label: "<term>", kind: vscode.CompletionItemKind.Field},
			{label: "<termnoidx>", kind: vscode.CompletionItemKind.Field},
			{label: "<par>", kind: vscode.CompletionItemKind.Field},
			{label: "<nop>", kind: vscode.CompletionItemKind.Field},
			{label: "<icon>", kind: vscode.CompletionItemKind.Field},
			{label: "<comment>", kind: vscode.CompletionItemKind.Field},
			{label: "<balloon>", kind: vscode.CompletionItemKind.Field},
			{label: "<m>", kind: vscode.CompletionItemKind.Field},
			{label: "<br>", kind: vscode.CompletionItemKind.Field},
			{label: "<href>", kind: vscode.CompletionItemKind.Field},
			{label: "<hlink>", kind: vscode.CompletionItemKind.Field},
			{label: "<yomi>", kind: vscode.CompletionItemKind.Field},
			{label: "<b>", kind: vscode.CompletionItemKind.Field},
			{label: "<strong>", kind: vscode.CompletionItemKind.Field},
			{label: "<B>", kind: vscode.CompletionItemKind.Field},
			{label: "<bou>", kind: vscode.CompletionItemKind.Field},
			{label: "<ami>", kind: vscode.CompletionItemKind.Field},
			{label: "<u>", kind: vscode.CompletionItemKind.Field},
			{label: "<del>", kind: vscode.CompletionItemKind.Field},
			{label: "<weak>", kind: vscode.CompletionItemKind.Field},
			{label: "<em>", kind: vscode.CompletionItemKind.Field},
			{label: "<i>", kind: vscode.CompletionItemKind.Field},
			{label: "<tt>", kind: vscode.CompletionItemKind.Field},
			{label: "<ttb>", kind: vscode.CompletionItemKind.Field},
			{label: "<tti>", kind: vscode.CompletionItemKind.Field},
			{label: "<tcy>", kind: vscode.CompletionItemKind.Field},
			{label: "<code>", kind: vscode.CompletionItemKind.Field},
			{label: "<small>", kind: vscode.CompletionItemKind.Field},
			{label: "<xsmall>", kind: vscode.CompletionItemKind.Field},
			{label: "<xxsmall>", kind: vscode.CompletionItemKind.Field},
			{label: "<large>", kind: vscode.CompletionItemKind.Field},
			{label: "<xlarge>", kind: vscode.CompletionItemKind.Field},
			{label: "<xxlarge>", kind: vscode.CompletionItemKind.Field},
			{label: "<file>", kind: vscode.CompletionItemKind.Field},
			{label: "<userinput>", kind: vscode.CompletionItemKind.Field},
			{label: "<foldhere>", kind: vscode.CompletionItemKind.Field},
			{label: "<ruby>", kind: vscode.CompletionItemKind.Field},
			{label: "<hearts>", kind: vscode.CompletionItemKind.Field},
			{label: "<TeX>", kind: vscode.CompletionItemKind.Field},
			{label: "<LaTeX>", kind: vscode.CompletionItemKind.Field},
			{label: "<cursor>", kind: vscode.CompletionItemKind.Field},
			{label: "<list>", kind: vscode.CompletionItemKind.Field},
			{label: "<hd>", kind: vscode.CompletionItemKind.Field},
			{label: "<fn>", kind: vscode.CompletionItemKind.Field},
			{label: "<img>", kind: vscode.CompletionItemKind.Field},
			{label: "<eq>", kind: vscode.CompletionItemKind.Field},
			{label: "<chapref>", kind: vscode.CompletionItemKind.Field},
			{label: "<chap>", kind: vscode.CompletionItemKind.Field},
			{label: "<title>", kind: vscode.CompletionItemKind.Field},
			{label: "<secref>", kind: vscode.CompletionItemKind.Field},
			{label: "<noteref>", kind: vscode.CompletionItemKind.Field},
			{label: "<column>", kind: vscode.CompletionItemKind.Field},
			{label: "<w>", kind: vscode.CompletionItemKind.Field},
			{label: "<wb>", kind: vscode.CompletionItemKind.Field},
			{label: "<bib>", kind: vscode.CompletionItemKind.Field},
			{label: "<idx>", kind: vscode.CompletionItemKind.Field},
			{label: "<hidx>", kind: vscode.CompletionItemKind.Field},
			{label: "<kw>", kind: vscode.CompletionItemKind.Field},
			{label: "<table>", kind: vscode.CompletionItemKind.Field},
			{label: "<embed>", kind: vscode.CompletionItemKind.Field},
			{label: "<raw>", kind: vscode.CompletionItemKind.Field},
			{label: "<uchar>", kind: vscode.CompletionItemKind.Field},
			{label: "<qq>", kind: vscode.CompletionItemKind.Field},
			{label: "<W>", kind: vscode.CompletionItemKind.Field},
		];
		let completionList = new vscode.CompletionList(completionItems, false);
		return Promise.resolve(completionList);
	}
}

const activate = (context) => {
	// ここの反応文字は1文字じゃないとダメっぽい
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(documentSelector, new BlockMethodCompletionItemProvider(), "/"));
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(documentSelector, new InlineMethodCompletionItemProvider(), "@"));
};

const deactivate = () => {
	return undefined;
};

module.exports = {activate, deactivate};
