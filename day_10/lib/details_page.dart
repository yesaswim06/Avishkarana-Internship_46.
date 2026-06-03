import 'package:flutter/material.dart';

class DetailsPage extends StatelessWidget {
  final String taskTitle; // Variable to hold the data passed from HomePage

  const DetailsPage({super.key, required this.taskTitle});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Task Details'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.task_alt, size: 80, color: Colors.deepPurpleAccent),
            const SizedBox(height: 20),
            Text(
              taskTitle,
              style: const TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            ),
            const Padding(
              padding: EdgeInsets.all(20.0),
              child: Text(
                'This is where you can add more descriptions, deadlines, and notes about your task.',
                textAlign: TextAlign.center,
              ),
            ),
            ElevatedButton(
              onPressed: () {
                // NAVIGATION: Going back to the previous page
                Navigator.pop(context);
              },
              child: const Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}