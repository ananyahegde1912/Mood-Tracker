import pandas as pd
import tkinter as tk
from tkinter import ttk
import matplotlib.pyplot as plt


data = pd.read_excel("mood_data.xlsx")

data.columns = data.columns.str.strip()


def show_chart():
   
    mood_counts = data["Mood"].value_counts()
    
    plt.figure(figsize=(6,4))
    mood_counts.plot(kind="bar", color="skyblue")
    plt.title("Mood Frequency")
    plt.xlabel("Mood")
    plt.ylabel("Number of Days")
    plt.tight_layout()
    plt.show()


root = tk.Tk()
root.title("Mood Data Viewer")
root.geometry("300x300")
root.configure(bg="#FFFFFF") 


tree = ttk.Treeview(root)
tree["columns"] = list(data.columns)
tree["show"] = "headings"

for col in data.columns:
    tree.heading(col, text=col)
    tree.column(col, width=150)

for index, row in data.iterrows():
    tree.insert("", "end", values=list(row))

tree.pack(fill="both", expand=True)


chart_button = tk.Button(root, text="Show Mood Chart", command=show_chart,bg="#bbe2bd", fg="black", font=("Arial", 12, "bold"))
chart_button.pack(pady=10)


root.mainloop()