import { escapeHtml } from 'helpers';
import React from 'react';
import { Descendant, Text } from 'slate';
import {Element} from '../Editor';
import classes from '../Editor/editor.module.scss';

const SerializeNode= (node) => {
	if (Text.isText(node)) {
		let reactNode = <span>{decodeURI(escapeHtml(node.text))}</span>;
		// @ts-ignore
		if (node.bold) {
			reactNode = <strong>{reactNode}</strong>;
		}
		// @ts-ignore
		if (node.code) {
			reactNode = <code className={classes.code}>{reactNode}</code>;
		}
		// @ts-ignore
		if (node.italic) {
			reactNode = <em>{reactNode}</em>;
		}
		// @ts-ignore
		if (node.underline) {
			reactNode = <u>{reactNode}</u>;
		}
		return reactNode;
	}

	const children = node.children.map((n,idx) => <SerializeNode key={idx} node={n}/>);

	return <Element attribute={{}} children={children} element={node} isPreview={true} />;
};

export default SerializeNode;