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

