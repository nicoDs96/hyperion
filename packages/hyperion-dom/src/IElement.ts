/**
 * Copyright (c) Meta Platforms, Inc. and affiliates. All Rights Reserved.
 */

import { AttributeInterceptor } from "@hyperion/hyperion-core/src/AttributeInterceptor";
import { FunctionInterceptor } from "@hyperion/hyperion-core/src/FunctionInterceptor";
// import { DOMShadowPrototype, sampleHTMLElement } from "./DOMShadowPrototype";
import { ElementAttributeInterceptor } from "./ElementAttributeInterceptor";
// import { INodePrototype } from "./INode";
import * as IElememt_ from "./IElement_";
export * from "./IElement_";

// export const IElementtPrototype = new DOMShadowPrototype(
//   Element,
//   INodePrototype,
//   {
//     sampleObject: sampleHTMLElement,
//     nodeType: document.ELEMENT_NODE
//   }
// );
export const IElementtPrototype = IElememt_.IElementtPrototype;

// export const getAttribute = new FunctionInterceptor('getAttribute', IElementtPrototype);
// export const getAttributeNS = new FunctionInterceptor('getAttributeNS', IElementtPrototype);
export const getAttributeNames = new FunctionInterceptor('getAttributeNames', IElementtPrototype);
export const getAttributeNode = new FunctionInterceptor('getAttributeNode', IElementtPrototype);
export const getAttributeNodeNS = new FunctionInterceptor('getAttributeNodeNS', IElementtPrototype);
export const getBoundingClientRect = new FunctionInterceptor('getBoundingClientRect', IElementtPrototype);
export const getClientRects = new FunctionInterceptor('getClientRects', IElementtPrototype);
export const getElementsByClassName = new FunctionInterceptor('getElementsByClassName', IElementtPrototype);
export const getElementsByTagName = new FunctionInterceptor('getElementsByTagName', IElementtPrototype);
export const getElementsByTagNameNS = new FunctionInterceptor('getElementsByTagNameNS', IElementtPrototype);
export const hasAttribute = new FunctionInterceptor('hasAttribute', IElementtPrototype);
export const hasAttributeNS = new FunctionInterceptor('hasAttributeNS', IElementtPrototype);
export const hasAttributes = new FunctionInterceptor('hasAttributes', IElementtPrototype);
export const insertAdjacentElement = new FunctionInterceptor('insertAdjacentElement', IElementtPrototype);
export const insertAdjacentHTML = new FunctionInterceptor('insertAdjacentHTML', IElementtPrototype);
export const insertAdjacentText = new FunctionInterceptor('insertAdjacentText', IElementtPrototype);
export const removeAttribute = new FunctionInterceptor('removeAttribute', IElementtPrototype);
export const removeAttributeNS = new FunctionInterceptor('removeAttributeNS', IElementtPrototype);
export const removeAttributeNode = new FunctionInterceptor('removeAttributeNode', IElementtPrototype);
// export const setAttribute = new FunctionInterceptor('setAttribute', IElementtPrototype);
// export const setAttributeNS = new FunctionInterceptor('setAttributeNS', IElementtPrototype);
// export const setAttributeNode = new FunctionInterceptor('setAttributeNode', IElementtPrototype);
// export const setAttributeNodeNS = new FunctionInterceptor('setAttributeNodeNS', IElementtPrototype);
export const toggleAttribute = new FunctionInterceptor('toggleAttribute', IElementtPrototype);

export const id = new ElementAttributeInterceptor("id", IElementtPrototype);
export const innerHTML = new AttributeInterceptor("innerHTML", IElementtPrototype);