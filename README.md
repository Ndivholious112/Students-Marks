
````markdown
# Students Marks Calculations

A simple web application to calculate students’ average marks and determine their final outcome (Pass, Fail, or Pass with Distinction) based on their test and exam scores.

## Features

- Enter student name and marks for two tests and one exam.
- Automatically calculates the average mark.
- Displays the final outcome based on the calculated average:
  - **Fail**: Average < 40
  - **Pass**: 40 ≤ Average < 75
  - **Pass with Distinction**: Average ≥ 75

## Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**

## Getting Started

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Ndivholious112/Students-Marks.git
````

2. Open `index.html` in your browser.

## How to Use

1. Enter the student’s name.
2. Enter the marks for:

   * Test 1
   * Test 2
   * Exam
3. Click the **Calculate** button.
4. View the calculated average and the student’s final outcome below the form.

## Example

```
Student Name: John Doe  
Test Mark 1: 65  
Test Mark 2: 70  
Exam Mark: 80  
```

**Output:**
`John Doe Average: 71.67 - Final Outcome: Pass`

## Repository Structure

```
Students-Marks/
├── index.html      # Webpage structure
├── style.css       # Styling for the webpage
└── script.js       # Logic for calculation and display
```

## License

This project is open-source and free to use under the [MIT License](LICENSE).
