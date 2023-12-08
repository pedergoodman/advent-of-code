Game 1:
3 blue, 4 red;
1 red, 2 green, 6 blue; 
2 green

Game 2:
1 blue, 2 green;
3 green, 4 blue, 1 red;
1 green, 1 blue

Game 3:
8 green, 6 blue, 20 red; 
5 blue, 4 red, 13 green;
5 green, 1 red
Game 4:
1 green, 3 red, 6 blue;
3 green, 6 red; 
3 green, 15 blue, 14 red
Game 5:
6 red, 1 blue, 3 green;
2 blue, 1 red, 2 green



Initial JSON Model
```JSON

[
{
  "gameNumber": 1,
  "rounds": [
    {
      "round": 1,
      "red": 4,
      "blue": 3,
      "green": 0
    }

      ["3 blue", "4 red"; ]
1 red, 2 green,
6 blue; 2 green
  ]
}
]

```
Updated JSON model

```JSON
[
  {
    "gameNumber": 1,
    "rounds": [
      {"roundNumber": 1, "colors": {"red": 4, "blue": 3, "green": 0}},
      {"roundNumber": 2, "colors": {"red": 1, "blue": 6, "green": 2}},
      {"roundNumber": 3, "colors": {"red": 0, "blue": 0, "green": 2}}
    ]
  },
  ...
  {
...
]
```