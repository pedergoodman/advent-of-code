package src.main.java.com.advent2024.day01;

import java.util.List;
import src.main.java.com.advent2024.utils.Day;
import src.main.java.com.advent2024.utils.ParseInput;

public class JavaDayOne implements Day {

    @Override
    public void runPuzzleOne() {
        System.out.println("Running Day One, Puzzle One");
        // Read the input file and parse data
        List<int[]> puzzleInputList = ParseInput.parseListWithTreeSpaces("/Users/yorkmacbook030/Desktop/Repos/Personal/advent-of-code/2024/src/main/java/com/advent2024/day01/day01-puzzleInput.txt");
        

        // Add logic for Puzzle One
        puzzleInputList.forEach(parts -> {
            System.out.println("Part 1: " + parts[0] + ", Part 2: " + parts[1]);
        });


    }

    @Override
    public void runPuzzleTwo() {
        System.out.println("Running Day One, Puzzle Two");
        // Add logic for Puzzle Two
    }

}
