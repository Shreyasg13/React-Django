param (
    [string]$ProjectName
)

function IsValidProjectName {
    param (
        [string]$Name
    )
    
    return $Name -match '^[A-Za-z_][A-Za-z0-9_]+$'
}

if (-not $ProjectName) {
    Write-Host "Usage: .\setup_django.ps1 -ProjectName <project_name>"
    exit
}

if (-not (IsValidProjectName -Name $ProjectName)) {
    Write-Host "Error: '$ProjectName' is not a valid project name. Please use only letters, digits, and underscores (do not start with a digit)."
    exit
}

Write-Progress -Activity "Setting up Virtual Environment" -Status "In Progress"
python -m venv env
.\env\Scripts\Activate.ps1
Write-Progress -Activity "Setting up Virtual Environment" -Completed

Write-Progress -Activity "Installing Django and Django REST Framework" -Status "In Progress"
pip install django djangorestframework
Write-Progress -Activity "Installing Django and Django REST Framework" -Completed

Write-Progress -Activity "Creating Django Project" -Status "In Progress"
$success = $true
try {
    django-admin startproject $ProjectName
} catch {
    Write-Host "Failed to create Django project. Please check the error message above."
    $success = $false
}
Write-Progress -Activity "Creating Django Project" -Completed

if ($success -and (Test-Path $ProjectName)) {
    cd $ProjectName
    Write-Progress -Activity "Creating Django App" -Status "In Progress"
    django-admin startapp myapp
    Write-Progress -Activity "Creating Django App" -Completed
    Write-Host "Django project '$ProjectName' and app 'myapp' have been created."
} else {
    Write-Host "The project directory was not created. Exiting script."
}