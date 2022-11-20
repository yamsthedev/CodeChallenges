// 6 Kyu Problem - Novemeber 20th 2022
// extract file name
// regexp, .match(regex), character groups, .indexOf(), .lastIndexOf()

/*
You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end
Inputs:
1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

1231231223123131_myFile.tar.gz2
Outputs
FILE_NAME.EXTENSION

This_is_an_otherExample.mpg

myFile.tar
Acceptable characters for random tests:

abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

The recommended way to solve it is using RegEx and specifically groups.
*/

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
      let x1 = dirtyFileName.indexOf("_")
      let x2 = dirtyFileName.lastIndexOf(".")
      return dirtyFileName.slice(x1+1,x2)
    }
}

// .match(regex) and capturing groups
// first resulting element is the whole match, then the capturing groups, and then any other nested capturing groups
// + is a quantifer, matches 1 or more of preceding token
// ^\d+_ matches all digits and then an underscore
// () a capturing group, character set that gets everything thats not a ".", then a singular ".", and another character set that gets everything thats not a "."
class FileNameExtractor {
  static extractFileName(dirty){
    return dirty.match(/^\d+_([^.]+.[^.]+)/)[1]
  }
}