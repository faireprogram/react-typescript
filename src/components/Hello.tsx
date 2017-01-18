import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
    		console.log('Hello World!!77777	');
	    	console.log('Hello World!!77777	zzz other string');

	    	const add = (a: number, b: number): number => a + b;
	    	const sub = (a: number, b: number): number => a - b;
	    	const result: number = add(1, 3001);
	    	const result_sub: number = sub(10000, 3001); 

        return <h1>Hello from {this.props.compiler} and {this.props.framework}! and result => {result} and result_sub => {result_sub}</h1>;
    }
}