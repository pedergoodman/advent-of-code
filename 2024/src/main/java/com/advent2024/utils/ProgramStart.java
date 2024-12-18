package src.main.java.com.advent2024.utils;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

import src.main.java.com.advent2024.day01.JavaDayOne;
import src.main.java.com.advent2024.day02.JavaDayTwo;

public class ProgramStart {

    // open the scanner
    // ask for wich day to run
    // run the day

    private static final Map<Integer, Day> days = new HashMap<>();

    static {
        days.put(1, new JavaDayOne());
        // Add other days here
        days.put(2, new JavaDayTwo());
        // days.put(3, new JavaDayThree());
    }

    public void start() {
        Scanner scanner = new Scanner(System.in);

        try {
            // Get the range of days
            Set<Integer> dayKeys = days.keySet();
            int minDay = dayKeys.stream().min(Integer::compareTo).orElse(1);
            int maxDay = dayKeys.stream().max(Integer::compareTo).orElse(1);

            // Ask for Day
            System.out.print("Which Day would you like to run?: ");
            System.out.println("Select between this range: " + minDay + " - " + maxDay);

            System.out.println("99 - Quit");
            int dayNumberInput = scanner.nextInt();

            if (dayNumberInput == 99) {
                System.out.println("Quitting...");
                return;
            }

            System.out.println("Selected Day: " + dayNumberInput);

            // Ask for Puzzle
            System.out.print("Which Puzzle would you like to run?: ");
            System.out.println("Choose from these choices");
            System.out.println("-------------------------\n");
            System.out.println("1 - Puzzle One");
            System.out.println("2 - Puzzle Two");
            int puzzleNumberInput = scanner.nextInt();

            System.out.println("Selected Puzzle: " + puzzleNumberInput);

            if (dayNumberInput == 99) {
                System.out.println("Quitting...");
                return;
            }

            Day selectedDay = days.get(dayNumberInput);
            if (selectedDay != null) {
                selectedDay.run(puzzleNumberInput);
            } else {
                System.out.println("Invalid day choice");
            }
        } finally {
            scanner.close();
        }
    }
}
