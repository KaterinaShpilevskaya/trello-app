import { Desks } from './Desks.js';
import {clock} from './utils/clock.util.js';


clock();
setInterval(clock, 1000);
// const user = {
//     name: 'Sheryl Turner',
//     avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/611.jpg',
//     desks: {
//       create: [
//         {
//           title: 'HTML +',
//           desc: 'Learn HTML +',
//           id: 4,
//           date: ''
//         },
//         {
//           title: 'Vue JS Pro',
//           desc: 'Learn VueJS Pro',
//           id: 3,
//           date: ''
//         }
//       ],
//       progress: [
//         {
//           title: 'CSS',
//           desc: 'Learn CSS like a pro',
//           id: 2,
//           date: ''
//         }
//       ],
//       done: [
//         {
//           title: 'JS',
//           desc: 'learn JavaScript',
//           id: 0,
//           date: ''
//         }
//       ]
//     },
//     id: 1
//   }
// API.putUser(1, user)

new Desks(1).initialRender()
