#!/bin/bash
# ./generate.sh ComponentName
printf 'START GENERATE COMPONENT %s\n' $1

# Delete folder if exists
if [ -d $1 ]; then
    printf "Are you sure to delete folder %s?" $1
    read RESP
    echo
    if [ "$RESP" = "y" ]; then
        rm -rf $1
        printf '>> Deleted folder %s\n' $1
    else
        printf '>> EXIT !!!\n\n'
        exit 1
    fi
fi

# Add one line in GlobalContext
echo "export const $1Context = React.createContext();" >> GlobalContext.js
printf '>> Added GlobalContext.js\n'

# Create new folder
mkdir $1
printf '>> Create new folder name %s\n' $1

# Copy 2 files template into new folder
cp -f ./__Template__/_REPLACE_* $1/
printf '>> Copy 2 files template into %s\n' $1

# Go to new folder
cd $1
printf '>> Go to %s\n' $1

# Replace content of Component file 
sed 's/_REPLACE_/'"$1"'/g' _REPLACE_Component.js  >> _REPLACE_Component.js.tmp && mv _REPLACE_Component.js.tmp _REPLACE_Component.js
printf '>> Replaced content of Component file\n'

# Replace content of UI file 
sed 's/_REPLACE_/'"$1"'/g' _REPLACE_UI.js  >> _REPLACE_UI.js.tmp && mv _REPLACE_UI.js.tmp _REPLACE_UI.js
printf '>> Replaced content of UI file\n'

# Replace name of new 2 files
mv _REPLACE_Component.js $1Component.js
mv _REPLACE_UI.js $1UI.js
printf '>> Replaced name of new 2 files\n\n'

# Add this line below into AppNavigator.js import
printf 'Add this line below into AppNavigator.js import\n'
printf "%b" "\e[1;34mimport $1Component from './$1/$1Component'\e[0m\n\n"

# Add this line below into AppNavigator.js createStackNavigator
printf 'Add this line below into AppNavigator.js createStackNavigator\n'
printf "%b" "\e[1;34m$1: $1Component\e[0m\n\n"

printf 'COMPLETED !!!\n\n'
