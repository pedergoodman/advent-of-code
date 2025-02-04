package java.src.utils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class ParseInput {

    // Parese the input file and return 2 lists of int arrays
    public static List<int[]> parseListWithTreeSpaces(String path) {
        List<Integer> partsList1 = new ArrayList<>();
        List<Integer> partsList2 = new ArrayList<>();

        try {
            // TODO change the path from absolute to a relitive path
            List<String> lines = Files.readAllLines(Paths.get(path));
            for (String line : lines) {
                String[] parts = line.split("   "); // split on 3 spaces in txt file
                // convert the string array to an int array
                partsList1.add(Integer.parseInt(parts[0]));
                partsList2.add(Integer.parseInt(parts[1]));

                // No need to add to partsList
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("Parts List 1 has " + partsList1.size() + " elements");
        System.out.println("Parts List 2 has " + partsList2.size() + " elements");
        List<int[]> result = new ArrayList<>();
        // result.add(partsList1.stream().mapToInt(i -> i).toArray());
        // result.add(partsList2.stream().mapToInt(i -> i).toArray());
        return result;
    }
}
