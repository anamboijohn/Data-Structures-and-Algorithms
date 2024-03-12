						/*********************************************************************
						 * ************************* This Code was writen by *****************
						 * ************************** ANAMBOI JOHN ADUKO**********************/

import { LinkedList, Node } from "./linked_list.mjs";

export default function merge_sort(linked_list) {
	`
	Sorts a linked list in ascending order
	-Recursively devide the linked list into sublists containing a single node
	- Repeatedly merge the sublist to produce sorted sublists until one remails

	Returns a sorted linked list
	-
	`
	if (linked_list.length() == 1) return linked_list;
    else if(!linked_list.head) return linked_list;

	let left, right;

	[left, right] = split(linked_list);
	left = merge_sort(left);
	right = merge_sort(right);
     
   // console.log("left: ", left, "right: ", right);
	return merge(left, right);
}

function split(linked_list) {
	`
	Divide the unsorted list at mid point into sublist
	`
	

	if (!linked_list || !linked_list.head){
		let left = linked_list
		let right = null
		return [left, right];
	}else{
		let mid = Math.floor(linked_list.length() / 2);
		
		let mid_node = linked_list.node_at_index(mid-1);
		let left_half = linked_list;
		let right_half = new LinkedList();
		right_half.head = mid_node.next
		mid_node.next = null;	
		return [left_half, right_half];
}
}

function merge(left, right) {
	let new_list = new LinkedList();
	let lc = 0;
	let rc = 0;

	let left_len = left.length();
	let right_len = right.length();

	let current_left = left.head;
	let current_right = right.head;

	while (lc < left_len && rc < right_len) {
		if (current_left.value < current_right.value) {
			new_list.push(current_left.value);
			current_left = current_left.next;
			lc++;
		} else {
			new_list.push(current_right.value);
			current_right = current_right.next;
			rc++;
		}
	}

	while (lc < left_len) {
		new_list.push(current_left.value);
		current_left = current_left.next;
		lc++;
	}

	while (rc < right_len) {
		new_list.push(current_right.value);
		current_right = current_right.next;
		rc++;
	}

	return new_list;
}

let list = new LinkedList();
list.push(3);
list.push(1);
list.push(59);
list.push(11);
list.push(2);
list.push(88);
list.push(61);

console.log(list.toString())
console.log(merge_sort(list).toString());
