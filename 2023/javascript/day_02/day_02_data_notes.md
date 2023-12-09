## Initial JSON Model
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
## Updated JSON model

```JSON
[
  {
    "gameNumber": 1,
    "rounds": [
      {"roundNumber": 1, "colors": {"red": 3, "blue": 7, "green": 6}},
      {"roundNumber": 2, "colors": {"red": 5, "blue": 1, "green": 5}},
      {"roundNumber": 3, "colors": {"red": 1, "blue": 8, "green": 5}},
      {"roundNumber": 4, "colors": {"red": 3, "blue": 5, "green": 1}}
    ]
  },
  {
    "gameNumber": 2,
    "rounds": [
      {"roundNumber": 1, "colors": {"red": 12, "blue": 1, "green": 9}},
      {"roundNumber": 2, "colors": {"red": 8, "blue": 2, "green": 18}},
      {"roundNumber": 3, "colors": {"red": 13, "blue": 2, "green": 6}},
      {"roundNumber": 4, "colors": {"red": 13, "blue": 3, "green": 7}},
      {"roundNumber": 5, "colors": {"red": 4, "blue": 5, "green": 4}},
      {"roundNumber": 6, "colors": {"red": 8, "blue": 6, "green": 7}}
    ]
  },
  ...
  {
...
]
```

