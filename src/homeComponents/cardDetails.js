import graph from "./images/graph.png";
import primes from "./images/prime.png";
import sort from "./images/sorting.jpeg";
import queen from "./images/queen.PNG";
import binSearch from "./images/binary-search.jpeg";
import convex from './images/convex.gif';
import findpath from './images/findpath.jpeg';
import turing from './images/turing.jpg';
import Recursion from './images/recursion.jpeg';
export function getDetails(){
   return [
       {
           id:1,
           title:"Pathfinder",
           description:"Visualize graph algorithms like dijkstra, BFS, DFS",
           route:"/pathfinder",
           img:findpath
       },
       {
           id:2,
           title:"Recursion Tree",
           description:"The process in which a function calls itself directly or indirectly is called recursion. Work in progress",
           route:"/graph",
           img:Recursion
       },
       {
           id:3,
           title:"Sorting Algorithm",
           description:"Compare different sorting algorithms",
           route:"/sort",
           img:sort
       },
       {
           id:4,
           title:"Recursive Sorting",
           description:"Compare different recursive sorting algorithms",
           route:"/recursivesort",
           img:sort
       },
       {
           id:5,
           title:"N Queen",
           description:"The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
           route:"/nqueen",
           img:queen
       },
       {
           id:6,
           title:"Turing Machine",
           description:"A Turing machine is a mathematical model of computation that defines an abstract machine that manipulates symbols on a strip of tape according to a table of rules",
           route:"/turing",
           img:turing
       },
       {
           id:7,
           title:"Prime Numbers",
           description:"Visualize how Seive is better than brute force",
           route:"/prime",
           img:primes
       },
       {
           id:8,
           title:"Convex Hull",
           description:"The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
           route:"/convexhull",
           img:convex
       },
       {
           id:9,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarysearch",
           img:binSearch
       }

   ]
}