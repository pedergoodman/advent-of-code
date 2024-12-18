package src.main.java.com.advent2024.utils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class ParseInput {

    public static List<int[]> parseListWithTreeSpaces(String path) {
        List<int[]> partsList = new ArrayList<>();

        try {
            // TODO change the path from absolute to a relitive path
            List<String> lines = Files.readAllLines(Paths.get(path));
            for (String line : lines) {
                String[] parts = line.split("   "); // split on 3 spaces in txt file
                // convert the string array to an int array

                int[] intParts = new int[parts.length];
                for (int i = 0; i < parts.length; i++) {
                    intParts[i] = Integer.parseInt(parts[i]);
                }

                partsList.add(intParts);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("Parts List has " + partsList.size() + " elements");
        return partsList;
    }
}
