## Installations
This PowerShell script automates the setup of a Django project with a virtual environment. It handles the creation of a virtual environment, installation of Django and Django REST Framework, and setting up a Django project and app.

##Prerequisites

    Python installed on your system.
    PowerShell on Windows.
    Basic understanding of Django and PowerShell.
##Usage

   To use this script, follow these steps:

    Download the Script: Download the setup_django.ps1 script to your local machine.

    Open PowerShell: Navigate to the directory where you downloaded setup_django.ps1.

    Run the Script: Execute the script with a project name of your choice. The project name should start with a letter or underscore and can contain letters, digits, and underscores. For example:

* powershell
```
.\setup_django.ps1 -ProjectName MyDjangoProject

```
This command will create a Django project named MyDjangoProject and a Django app named myapp.

##Script Details

    Virtual Environment Creation: The script creates a virtual environment in a directory named env within the current directory.

    Django and Django REST Framework Installation: Installs Django and Django REST Framework inside the virtual environment.

    Django Project and App Creation: Initializes a new Django project with the specified project name and a default app called myapp

##Troubleshooting

    Execution Policy: If you encounter a script execution policy error, run PowerShell as Administrator and set the execution policy to allow the script to run:

   * powershell
    ```
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
    ```
Project Name Validation: The script validates the project name. If you receive an error regarding the project name, ensure it follows the naming conventions (starts with a letter or underscore, and contains only letters, digits, and underscores).
