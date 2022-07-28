---
title: Flipbook Textures
category:
	- Tutorials
tags:
    - intermediate
mentions:
    - MedicalJewel105
---

## What this page covers

From this page you will learn:

-   How to apply flipbook textures to a block.
-   Which values you can apply in flipbook_textures.json and what they do.

## Beginning

Flipbook textures are animated textures. Blocks like fire, water, lava and magma use them. You can use animated texture for your block too!
For the first time let's use magma's animated texture.
You can simply apply animated magma's texture to your block by changing `texture` value to one, defined in `Vanilla_RP/textures/terrain_texture.json`:

```json
"magma": {
    "textures": "textures/blocks/magma"
}
```

<CodeHeader>BP/blocks/flipbook_block.json</CodeHeader>

```json
{
	"format_version": "1.17.20",
	"minecraft:block": {
		"description": {
			"identifier": "wiki:flipbook_block"
		},
		"components": {
			"minecraft:destroy_time": 7,
			"minecraft:unit_cube": {},
			"minecraft:block_light_absorption": 15,
			"minecraft:block_light_emission": 0,
			"minecraft:creative_category": {
				"category": "construction",
				"group": "itemGroup.name.construction"
			},
			"minecraft:material_instances": {
				"*": {
					"texture": "magma", // Add it here.
					"render_method": "opaque"
				}
			}
		}
	}
}
```

![](/assets/images/blocks/flipbook-textures/animated_texture_1.gif)

Now it has animated texture!

## How it works

After making block have animated texture, it is time to figure out how it all works.

1. Minecraft takes name and path to texture defined in `terrain_texture.json`

<CodeHeader>RP/textures/terrain_texture.json</CodeHeader>

```json
{
    "num_mip_levels" : 4,
    "padding" : 8,
    "resource_pack_name" : "vanilla",
    "texture_data" : {
        "magma": {
            "textures": "textures/blocks/magma"
        }
    }
}
```

2. Minecraft searches looks into `flipbook_textures.json` aiming to find animation parameters for this name (`magma`)

<CodeHeader>RP/textures/flipbook_textures.json</CodeHeader>

```json
[
    {
        "flipbook_texture": "textures/blocks/magma",
        "atlas_tile": "magma",
        "ticks_per_frame": 10
    }
]
```

`"atlas_tile"` here adds animation parameters to `magma` name, defined in terrain_texture file.

3. Minecraft uses this animated texture for blocks who have `magma` as texture.

This is the way how it works.

## What are the components?

While looking up for something in vanilla flipbook texture file, you can notice some components.

Here is explanation for them:

| Component          | Value   | Meaning                                                                  |
| ------------------ | ------- | ------------------------------------------------------------------------ |
| flipbook_texture   | string  | Path to texture.                                                         |
| atlas_tile         | string  | The shortname defined in the terrain_textures.json.                      |
| atlas_index        | integer | The index of the texture array inside the definition of that shortname.* |
| atlas_tile_variant | integer | Variates a Tile value from a Block with Variated Textures.                                      |
| ticks_per_frame    | integer | How fast frames should be changed. 20 ticks = 1 second.                  |
| frames             | list    | List with numbers of frames which defines their order.                   |
| replicate          | integer | Sets the size of pixels. Default: 1.**                                   |
| blend_frames       | boolean | Defines should frames transition be smooth or not. Default: true.        |

\* `atlas_index`

This type of component is used for defining a texture tile variant on blocks with Index Arrays like Dirt, Wood, Leaves and more.

Example:

<CodeHeader>RP/textures/terrain_texture.json#texture_data</CodeHeader>

```json
"dirt" : {
    "textures" : [ 
        "textures/blocks/dirt", 
        "textures/blocks/coarse_dirt"
    ]
}
```

Then you need can add `"atlas_index": 1` to have animated texture for the second path.

\* `atlas_tile_variant`

Tile Variant almost does the same as Tile Index. But this component will let you define the value of the Texture Variation from a block with Texture Variation arrays.

Example:

<CodeHeader>RP/textures/terrain_texture.json#texture_data</CodeHeader>

```json
"dirt": {
    "textures": {
           "variations": [
		   { "path": "textures/blocks/dirt_variated_and_should_be_animated" },
		   { "path": "textures/blocks/dirt0" },
	           { "path": "textures/blocks/dirt1" }
				]
			}
		}
```

And since path number 1 has the variated texture hence we'll put `"atlas_tile_variant": 0` to have animated texture for that specific path.

\*\* `replicate`

Changes size of the peace of used texture. Can only take values that are multiples of two. If frame has smaller amount of pixels, extends them.

| `replicate` value |           what it does           |
| ----------------- | -------------------------------- |
| < 0               | Breaks animation                 |
| 0                 | Breaks animation & texture       |
| 2                 | Renders 1/4 pixels of frame      |
| x                 | Renders 1/(x**2) pixels of frame |

![](/assets/images/blocks/flipbook-textures/animated_texture_2.gif)

Now you can modify vanilla flipbook textures or create your own ones.
