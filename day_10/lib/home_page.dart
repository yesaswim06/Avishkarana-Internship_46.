import 'package:flutter/material.dart';
import 'details_page.dart'; // Import the details page to navigate to it

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    final List<String> tasks = ['Study Flutter', 'Buy Groceries', 'Gym Session', 'Read a Book'];

    return Scaffold(
      appBar: AppBar(
        title: const Text('My Tasks'),
        centerTitle: true,
      ),
      body: ListView.builder(
        itemCount: tasks.length,
        itemBuilder: (context, index) {
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: ListTile(
              title: Text(tasks[index]),
              trailing: const Icon(Icons.arrow_forward_ios, size: 16),
              onTap: () {
                // NAVIGATION: Moving to the next page
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => DetailsPage(taskTitle: tasks[index]),
                  ),
                );
              },
            ),
          );
        },
      ),
    );
  }
}