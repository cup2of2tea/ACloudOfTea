import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-prog-comp',
  templateUrl: './prog-comp.component.html',
  styleUrls: ['./prog-comp.component.scss']
})
export class ProgCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var data = {
      "algos": {
        "contests": {
          "Codeforces": {
            "url": "http://codeforces.com/",
            "themes": "Mathématiques, Graphes, Programmation Dynamique, Ad-Hoc",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 3,
            "UI": 5,
            "frequency": "2 fois par semaine",
            "duration": "2h",
            "premium": "Non",
            "divisions": "4?",
            "hacks": 1,
            "place": 2,
            "misc": "Propose également des concours de langages exotiques, April's fool contest."
          },
          "Topcoder": {
            "url": "https://www.topcoder.com/challenges",
            "themes": "Programmation Dynamique, Combinatoire, Graphes",
            "variety": 3,
            "quality": 3,
            "beginnerFriendly": 0,
            "UI": 0,
            "frequency": "1 fois par semaine",
            "duration": "1h30",
            "premium": "Non",
            "divisions": "2",
            "hacks": 1,
            "misc": "Le pionnier, mais UI catastrophique"
          },
          "Codechef": {
            "url": "https://www.codechef.com/",
            "themes": "Mathématiques, Structures, Graphes",
            "variety": 4,
            "quality": 4,
            "beginnerFriendly": 3,
            "UI": 4,
            "frequency": "3 fois par mois (long, lunchtime, short)",
            "duration": "3h / 10 jours",
            "premium": "Non",
            "divisions": "2",
            "hacks": 0,
            "misc": "L'un des seuls concours d'algo long de qualité"
          },
          "Google Code Jam": {
            "url": "https://codingcompetitions.withgoogle.com/codejam",
            "themes": "Interactif, Ad-Hoc, Mathématiques",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 4,
            "frequency": "1 fois par an",
            "duration": "2h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "place": 2,
            "misc": "Le plus gros concours international annuel (41000 personnes en 2020)."
          },
          "Google Distributed Code Jam": {
            "url": "https://codingcompetitions.withgoogle.com/past-competitions/distributed",
            "themes": "Algorithmes multithreadés, ?...",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 0,
            "UI": 4,
            "frequency": "1 fois par an",
            "duration": "2h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "L'un des seuls concours d'algo multithread"
          },
          "Google KickStart": {
            "url": "https://codingcompetitions.withgoogle.com/kickstart",
            "themes": "Interactif, Ad-Hoc, Mathématiques",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 3,
            "UI": 4,
            "frequency": "9 fois par an",
            "duration": "3h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "Un concours qui se veut comme une introduction à des concours plus compliqués (style Google Code Jam)."
          },
          "LeetCode": {
            "url": "https://leetcode.com/",
            "themes": "Structures, Implementation",
            "variety": 2,
            "quality": 2,
            "beginnerFriendly": 5,
            "UI": 4,
            "frequency": "2 fois par semaine",
            "duration": "1h30",
            "premium": "Bibliothèque de problèmes de tests de recrutements (Google, Facebook, Amazon)... Déconseillé",
            "divisions": "Non",
            "hacks": 0,
            "place": -1,
            "misc": "Du recuit"
          },
          "Hackerrank": {
            "url": "https://www.hackerrank.com/",
            "themes": "Programmation Fonctionnelle, IA, Mathématiques, Structures ...",
            "variety": 5,
            "quality": 3,
            "beginnerFriendly": 3,
            "UI": 5,
            "frequency": "RIP?",
            "duration": "2h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "Ne semble plus héberger beaucoup de concours intéressants, mais section training très complète"
          },
          "Hackerearth": {
            "url": "https://www.hackerearth.com/",
            "themes": "Structures, Mathématiques, Ad-Hoc",
            "variety": 3,
            "quality": 2,
            "beginnerFriendly": 2,
            "UI": 4,
            "frequency": "1 fois par mois",
            "duration": "7 jours",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "place": -1,
            "misc": "Concours très inégaux. Certains sont hideux et rédigés par un stagiaire de passage, d'autres sont ok."
          },
          "Codingame": {
            "url": "http://codingame.com/",
            "themes": "Implementation, Mathématiques, Ad-Hoc, Elagage",
            "variety": 3,
            "quality": 2,
            "beginnerFriendly": 5,
            "UI": 5,
            "frequency": "RIP",
            "duration": "2h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "Concours sympas mais pénalisés par le processus de validation (testcases faibles). Manque de rigueur algorithmique."
          },
          "AtCoder": {
            "url": "https://atcoder.jp/",
            "themes": "Graphes, Mathématiques, Ad-Hoc",
            "variety": 4,
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 4,
            "frequency": "2 fois par semaine",
            "duration": "2h",
            "premium": "Non",
            "divisions": "2",
            "hacks": 0,
            "misc": "Problèmes originaux et intéressants. "
          },
          "Usaco": {
            "url": "http://www.usaco.org/",
            "themes": "Structures, Mathématiques, Graphes",
            "variety": 3,
            "quality": 4,
            "beginnerFriendly": 2,
            "UI": 3,
            "frequency": "1 fois par mois",
            "duration": "4h",
            "premium": "Non",
            "divisions": "4",
            "hacks": 0,
            "misc": "Meuh"
          },
          "IPSC": {
            "url": "https://ipsc.ksp.sk/",
            "themes": "WTF, xD, Outside the box",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 0,
            "UI": 2,
            "frequency": "1 fois par an",
            "duration": "4h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "place": 1,
            "misc": "Problèmes très exotiques et très intéressant. Solutions inhabituelles attendues"
          },
          "Facebook Hacker Cup": {
            "url": "https://www.facebook.com/hackercup/",
            "themes": "Mathématiques, Programmation Dynamique, Ad-Hoc",
            "variety": 4,
            "quality": 4,
            "beginnerFriendly": 2,
            "UI": 3,
            "frequency": "1 fois par an",
            "duration": "4h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "Concurrent de Google Code Jam. Très gros concours annuel."
          },
          "Prologin": {
            "url": "https://prologin.org/",
            "themes": "Dichotomie, Programmation Dynamique, Ad-Hoc, Graphes",
            "variety": 4,
            "quality": 4,
            "beginnerFriendly": 3,
            "UI": 4,
            "frequency": "1 fois par an",
            "duration": "4h",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "Concours national pour les 20 ans ou moins, mais section entraînement ouverte à tous."
          },
          "IOI": {
            "url": "https://ioinformatics.org/",
            "themes": "Flots, Programmation Dynamique, Mathématiques, Graphes",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 0,
            "UI": 3,
            "frequency": "1 fois par an",
            "duration": "?",
            "premium": "Non",
            "divisions": "Non",
            "hacks": 0,
            "misc": "Concours international pour les 'jeunes'. Problèmes accessibles publiquement."
          }
        },
        "training": {
          "France-ioi": {
            "url": "http://www.france-ioi.org/",
            "themes": "Flots, Programmation Dynamique, Mathématiques, Graphes, Géométrie",
            "variety": 5,
            "quality": 5,
            "beginnerFriendly": 5,
            "UI": 4,
            "premium": "Non",
            "place": 1,
            "misc": "Excellent site pour commencer. Permet d'apprendre des langages facilement et de découvrir l'algorithmique."
          },
          "Project Euler": {
            "url": "https://projecteuler.net/",
            "themes": "Mathématiques, Combinatoire, Théorie des nombres",
            "variety": 4,
            "quality": 5,
            "beginnerFriendly": 0,
            "UI": 3,
            "premium": "Non",
            "place": 2,
            "misc": "Problèmes mathématiques à résoudre localement (seule la solution est soumise, pas le code générant la solution)."
          },
          "Spoj": {
            "url": "https://www.spoj.com/",
            "themes": "Graphes, Programmation Dynamique, Ad-Hoc",
            "variety": 3,
            "quality": 3,
            "beginnerFriendly": 2,
            "UI": 2,
            "premium": "Non",
            "place": -1,
            "misc": "Peu intéressant."
          },
          "Online Judge": {
            "url": "https://onlinejudge.org/",
            "themes": "Graphes, Programmation Dynamique, Ad-Hoc, Chaînes de caractères",
            "variety": 3,
            "quality": 3,
            "beginnerFriendly": 2,
            "UI": 1,
            "premium": "Non",
            "place": -1,
            "misc": "Peu intéressant."
          },
          "Kattis": {
            "url": "https://open.kattis.com/",
            "themes": "Graphes, Programmation Dynamique, Ad-Hoc",
            "variety": 4,
            "quality": 4,
            "beginnerFriendly": 2,
            "UI": 3,
            "premium": "Non",
            "misc": "Problèmes ACM-ICPC dans les archives"
          }
        }
      },
      "optimisation": {
        "contests": {
          "Google Hash Code": {
            "url": "https://codingcompetitions.withgoogle.com/hashcode/",
            "themes": "Realistique, Graphes, Ordonancement",
            "quality": 5,
            "beginnerFriendly": 3,
            "UI": 5,
            "frequency": "1 fois par an",
            "place": 1,
            "misc": "Toujours pareil avec Google: le plus gros concours d'optimisation annuel."
          },
          "Azspcs": {
            "url": "http://azspcs.com/",
            "themes": "Mathématique, Graphes",
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 3,
            "frequency": "1 fois tous les 2 mois",
            "place": 3,
            "misc": "Concours assez réguliers. Plutôt mathématiques"
          },
          "Codingame": {
            "url": "http://codingame.com/",
            "themes": "Graphes, Chaînes de caractères, Simulation",
            "quality": 4,
            "beginnerFriendly": 5,
            "frequency": "1 fois tous les 2 mois",
            "UI": 5,
            "misc": "Interface graphique permettant de visualiser en live l'exécution du code."
          },
          "Topcoder": {
            "url": "https://www.topcoder.com/challenges",
            "themes": "Graphes, Géométrie, Simulation",
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 0,
            "frequency": "1 fois par mois (Marathon Match)",
            "place": 2,
            "misc": "Marathon matches: la seule raison pour laquelle affronter cette UI aurait un sens."
          }
        },
        "training": {
          "Primers": {
            "url": "https://primers.xyz/",
            "themes": "Graphes, Géométrie, Simulation",
            "quality": 4,
            "beginnerFriendly": 3,
            "UI": 3,
            "misc": "Peu actif, mais bonne vision globale du domaine de l'optimisation."
          }
        }
      },
      "bot programming": {
        "contests": {
          "Codingame": {
            "url": "http://codingame.com/",
            "quality": 5,
            "beginnerFriendly": 3,
            "UI": 5,
            "frequency": "1 fois tous les 2 mois",
            "place": 1,
            "misc": "La plateforme la plus active en bot programming. Possibilité de jouer après concours également."
          },
          "Halite": {
            "url": "https://halite.io/",
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 2,
            "frequency": "1 fois par an",
            "misc": "Concours sur plusieurs mois. Très large communauté."
          },
          "Battle Code": {
            "url": "https://www.battlecode.org/",
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 3,
            "frequency": "1 fois par an",
            "misc": "Concours organisé par le MIT. Phase finale réservée aux étudiants (pas forcément du MIT)"
          }
        }
      },
      "puzzle": {
        "contests": {
          "WPF": {
            "url": "https://gp.worldpuzzle.org/",
            "quality": 5,
            "beginnerFriendly": 3,
            "UI": 4,
            "frequency": "C'est... compliqué",
            "place": 1,
            "misc": "La crème des puzzle solvers s'y retrouve. Les plus simples des puzzles sont accessibles, mais les plus complexes sont monstrueux."
          },
          "LogicMaster": {
            "url": "https://logicmastersindia.com/",
            "quality": 5,
            "beginnerFriendly": 4,
            "UI": 2,
            "place": 1,
            "frequency": "2 fois par mois",
            "misc": "Très varié. Propose des ui pour résoudre (remplace le crayon papier), mais... sous Flash."
          }
        }
      },
      "ctf": {
        "training": {
          "NewbieContest": {
            "url": "https://www.newbiecontest.org/",
            "quality": 3,
            "beginnerFriendly": 3,
            "UI": 3,
            "misc": ""
          },
          "W3Challs": {
            "url": "https://w3challs.com/",
            "quality": 3,
            "beginnerFriendly": 2,
            "UI": 3,
            "misc": ""
          },
          "Root-me": {
            "url": "https://www.root-me.org/fr",
            "quality": 4,
            "beginnerFriendly": 4,
            "UI": 5,
            "misc": "",
            "place": 1
          },
          "Hack The Box": {
            "url": "https://www.hackthebox.eu/",
            "quality": 3,
            "beginnerFriendly": 4,
            "UI": 4,
            "misc": ""
          },
          "Over The Wire": {
            "url": "https://overthewire.org/wargames/",
            "quality": 5,
            "beginnerFriendly": 2,
            "UI": 4,
            "misc": "",
            "place": 1
          },
          "Pwnable.tw": {
            "url": "https://pwnable.tw/",
            "quality": 5,
            "beginnerFriendly": 0,
            "UI": 4,
            "misc": ""
          },
          "Pwnable.kr": {
            "url": "http://pwnable.kr/",
            "quality": 4,
            "beginnerFriendly": 2,
            "UI": 3,
            "misc": "",
            "place": 1
          }
        }
      }
    };


    for (var i = 0; i < Object.keys(data).length; i++) {
      var k1 = Object.keys(data)[i];
      for (var j = 0; j < Object.keys(data[k1]).length; j++) {
        var k2 = Object.keys(data[k1])[j];
        var tmp = [];
        for (var l = 0; l < Object.keys(data[k1][k2]).length; l++) {
          var k3 = Object.keys(data[k1][k2])[l];
          var o = [data[k1][k2][k3]];
          o[0]['name'] = k3;
          o[0]['url'] = o[0]['url'] || '';
          o[0]['place'] = o[0]['place'] || 0;
          console.log(o[0]['place']);
          tmp = tmp.concat(o);
        }
        data[k1][k2] = tmp;
      }
    }

    var colors = ['#f15353', '#f15353', '#f1b13e', '#f1b13e', '#34b134', '#34b134'];

    function format(d) {
      // `d` is the original data object for the row
      return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>' + d.misc + '</td>' +
        '</tr>' +
        '</table>';
    }


    $(document).ready(function () {
      $.fn.dataTable.ext.errMode = 'none';

      var contestAlgo = $('#contestAlgo').DataTable({
        "processing": true,
        data: data['algos']['contests'],

        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'themes'
          },
          {
            data: 'variety',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            },
            orderData: [3, 2]
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'duration'
          },
          {
            data: 'frequency'
          },
          {
            data: 'divisions',
            render: function (data, type, row) {
              if (type == 'display') {
                if (row['divisions'] == 'Non') {
                  return '<div> <span class="material-icons">clear</span> </div>';
                } else {
                  return '<div> <span class="material-icons">done</span> </div> <div> ' + row['divisions'] + ' </div> ';
                }
              }
            }
          },
          {
            data: 'hacks',
            render: function (data, type, row) {
              if (type == 'display') {
                if (row['hacks'] == 1) {
                  return '<span class="material-icons">done</span>';
                } else {
                  return '<span class="material-icons">clear</span>';
                }
              }
            }
          }
        ]
      });
      $('#contestAlgo').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = contestAlgo.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });

      var trainingAlgo = $('#trainingAlgo').DataTable({
        "processing": true,
        data: data['algos']['training'],

        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'themes'
          },
          {
            data: 'variety',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            },
            orderData: [3, 2]
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          }
        ]
      });
      $('#trainingAlgo').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = trainingAlgo.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });

      var contestsOpti = $('#contestsOpti').DataTable({
        "processing": true,
        data: data['optimisation']['contests'],

        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'themes'
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'frequency'
          }
        ]
      });
      $('#contestsOpti').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = contestsOpti.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });

      var trainingOpti = $('#trainingOpti').DataTable({
        "processing": true,
        data: data['optimisation']['training'],

        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'themes'
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          }
        ]
      });
      $('#trainingOpti').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = trainingOpti.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });

      var contestsBot = $('#contestsBot').DataTable({
        "processing": true,
        data: data['bot programming']['contests'],

        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'frequency'
          }
        ]
      });
      $('#contestsBot').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = contestsBot.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });


      var contestsPuzzle = $('#contestsPuzzle').DataTable({
        "processing": true,
        data: data['puzzle']['contests'],

        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'frequency'
          }
        ]
      });
      $('#contestsPuzzle').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = contestsPuzzle.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });

      var contestsCtf = $('#contestsCtf').DataTable({
        "processing": true,
        data: data['ctf']['training'],
        columns: [
          {
            data: 'place',
            render: function (data, type, row) {
              if (type == 'display') {

                if (data == -1) {
                  return '<div><span class="material-icons">clear</span></div>';
                }
                else if (data <= 3 && data > 0) {
                  return '<div><span class="material-icons">star</span></div>';
                } else {
                  return '<div><span></span></div>';
                }
              }
            },
          },
          {
            data: 'url',
            render: function (data, type, row) {
              if (type == 'display') {
                if (!row['name']) {
                  console.log(row);
                }
                return '<a href="' + data + '">' + row['name'] + '</a>';
              }
            },
            orderData: [1, 2]
          },
          {
            data: 'quality',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'UI',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          },
          {
            data: 'beginnerFriendly',
            "createdCell": function (td, cellData, rowData, row, col) {
              for (var i = 0; i <= 5; i++) {
                if (cellData <= i) {
                  $(td).css('background-color', colors[i]);
                  break;
                }
              }
            }
          }
        ]
      });
      $('#contestsCtf').on('click', 'td', function () {
        var tr = $(this).closest('tr');
        var row = contestsCtf.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });
    });
  }

}
