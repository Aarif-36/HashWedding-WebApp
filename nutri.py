import pandas as pd

# Create a simple dataset (you can replace this with reading a CSV file)
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Math': [85, 78, 90, 72],
    'Science': [92, 76, 88, 80]
}

# Convert dictionary to pandas DataFrame
df = pd.DataFrame(data)

# Display the DataFrame
print("Student Marks:\n", df)

# Calculate and display the average marks
print("\nAverage Marks:\n", df[['Math', 'Science']].mean())

# Find the student with the highest total marks
df['Total'] = df['Math'] + df['Science']
topper = df.loc[df['Total'].idxmax()]
print(f"\nTopper: {topper['Name']} with {topper['Total']} total marks")
