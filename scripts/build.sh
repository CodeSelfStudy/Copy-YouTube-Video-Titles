# Run this script at the same level as the manifest.json file.
# So, something like `$ ./scripts/build.sh`.
build_it () {
    # Check if the output file exists.
    [ -f ./build/show-youtube-titles.zip ] && rm ./build/show-youtube-titles.zip || echo "Building"
    zip build/show-youtube-titles.zip manifest.json js/* css/* images/*
}

# Create the build directory, if it doesn't exist.
[ -d "build" ] && echo "Found ./build directory" || mkdir ./build

build_it
echo "Done"
ls -al ./build
