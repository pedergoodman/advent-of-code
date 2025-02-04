package java.src.utils;

public interface Day {

    default void run(int puzzleNumberInput) {
        switch (puzzleNumberInput) {
            case 1:
                runPuzzleOne();
                break;
            case 2:
                runPuzzleTwo();
                break;
            default:
                System.out.println("Invalid Input. Please select 1 or 2");
                // TODO: go back to the start of the loop?
                break;
        }

    }

    void runPuzzleOne();

    void runPuzzleTwo();
}
