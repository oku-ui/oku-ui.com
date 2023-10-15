---
title: Beekeeper Studio
description: Beekeeper Studio is an open source SQL editor and database management app that is both powerful and easy to use.
componentName: OkuAccordion
image: 'https://oku-ui.com/og/oku-accordion.png'
links:
  - label: Beekeeper Studio
    icon: i-ph-link
    to: https://www.beekeeperstudio.io/
---


# What is Beekeeper Studio?

Beekeeper Studio is an open source SQL editor and database management app that is both powerful and easy to use. It works with PostgreSQL, MySQL, SQLite, SQL Server, Redis & more.

<br>

# Installation

### 1) Add GPG Key

::code-group
```sh [linux]
wget --quiet -O - https://deb.beekeeperstudio.io/beekeeper.key | sudo apt-key add -
```

```sh [macOS]
soon

```
::

This command adds the GPG security key required to install Beekeeper Studio. The security key helps you verify that the software comes from a trusted source and prevents malware from infecting your system. This command downloads and adds the security key from the official Beekeeper Studio repository.

### 2) Add Repository

::code-group
```sh [linux]
echo "deb https://deb.beekeeperstudio.io stable main" | sudo tee /etc/apt/sources.list.d/beekeeper-studio-app.list
```

```sh [macOS]
soon

```
::

This command adds the official repository address of Beekeeper Studio to your Debian or Ubuntu-based Linux system, making Beekeeper Studio available for installation. You can receive updates for Beekeeper Studio through this repository. The command allows you to add a new source to your system's package manager.

### 3) Update Package List

::code-group
```sh [linux]
sudo apt update -y
```

```sh [macOS]
soon

```
::

This command updates the package lists on your Debian or Ubuntu-based Linux system. It ensures that the system has the latest information about available packages and their versions from the software repositories. The '-y' flag is used to automatically confirm any prompts for confirmation during the update process.

### 4) Install Beekeeper Studio

::code-group
```sh [linux]
sudo apt install beekeeper-studio -y
```

```sh [macOS]
soon

```
::

This command installs Beekeeper Studio, an open-source SQL editor and database management application, on your Debian or Ubuntu-based Linux system. The '-y' flag is used to automatically confirm any prompts for confirmation during the installation process.


### 5) Run Beekeeper Studio

1. To launch Beekeeper Studio, locate it in the menu or application launcher and click on it.
2. Once the application is launched, you can use it to manage your database connections and execute SQL queries.
3. When you're done, you can close the application by using the menu or the close button located in the top right corner of the window.

---

# Uninstall Beekeeper Studio

::code-group
```sh [linux]
sudo apt remove beekeeper-studio -y
sudo rm /etc/apt/sources.list.d/beekeeper-studio-app.list
```

```sh [macOS]
soon

```
::

This command removes Beekeeper Studio from your Debian or Ubuntu-based Linux system.


# Update Beekeeper Studio

::code-group
```sh [linux]
sudo apt update -y
sudo apt upgrade beekeeper-studio -y
```

```sh [macOS]
soon

```
::

This command updates Beekeeper Studio to the latest version available on your Debian or Ubuntu-based Linux system.

We used the official repository and the APT package manager to install Beekeeper Studio, so we can easily update it in the future using the system update command.
