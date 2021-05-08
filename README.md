# Caesar cipher CLI tool

**CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

## How to install

1. Download or clone this repository
2. Run command line in the application folder
3. Install dependencies:
```bash
$ npm install or npm i
```

## How to use
To start application, in the folder of application use next command into command line: "node my_caesar_cli [options]", 
where options are command line parameters, that define application operation.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: Shift level - integer number [Required]
2. **-a, --action**: Action type - decode or encode [Required]
3.  **-i, --input**: Input file [Optional]
4.  **-o, --output**: Output file [Optional]

To see this list of options, enter in command line: "node my_caesar_cli --help"

**Shift** option accepts only integer values. It denotes shift value of letters for encryption and decryption.

**Action** option accepts only **encode** or **decode** values. It uses for indicate, which operation should be done
with incoming text: **encrypt** or **decrypt**.

**Input** option accepts path to file where the text will be written.

**Output** option accepts  path to file from text will be read.

**Shift**  and **Action** options are **mandatory**: if one of them is missing - there will be and **error**.

**Input** and **output** options must be relative or absolute path to file or just filename if file on application's root folder.

If file on any of paths **doesn't exist** or **incorrect**, there will be an error.

If **input** or/and **output** options are missing, then **reading** or/and **writing** will be parsed from
**command line**. To interrupt this process press **Ctrl+C** .

## Example of usage

1. _-a (--action)_ is **encode**

```bash
$ node my_caesar_cli -a encode -s 7 -i input.txt -o output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. _-a (--action)_ is **decode**  
_Decoding encoded initial string with the same -s(--shift) number produces the initial string._

```bash
$ node my_caesar_cli -a decode -s 7 -i encoded.txt -o plain.txt
```

> encoded.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> plain.txt
> `This is secret. Message about "_" symbol!`

3. _Negative shift handling_

```bash
$ node my_caesar_cli -a encode -s -7 -i plain.txt -o encoded.txt
```

> plain.txt
> `This is secret. Message about "_" symbol!`

> encoded.txt
> `Mabl bl lxvkxm. Fxlltzx tuhnm "_" lrfuhe! `

4. _Usage without input and output_

```bash
$ node my_caesar_cli -a encode -s -7
```

> console input:
> `This is secret. Message about "_" symbol!`

> console output:
> `Mabl bl lxvkxm. Fxlltzx tuhnm "_" lrfuhe! `

> console input:
> `We are watching you. Scum.`

> console output:
> `Px tkx ptmvabgz rhn. Lvnf.`

> **Ctr+C**  
> done


