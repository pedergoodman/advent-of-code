package java.src.challenges;

import java.src.utils.Day;
import java.src.utils.ParseInput;
import java.util.List;


public class JavaDayOne implements Day {

    @Override
    public void runPuzzleOne() {
        System.out.println("Running Day One, Puzzle One");
        // Read the input file and parse data
        List<int[]> puzzleInputList = ParseInput.parseListWithTreeSpaces("src/challenges/day01/day01-puzzleInput.txt");
        

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
