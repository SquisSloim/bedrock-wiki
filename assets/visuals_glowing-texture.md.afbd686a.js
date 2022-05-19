import{_ as l,c as i,a as s,w as e,e as p,b as t,d as n,r as o,o as c}from"./404.md.0f0a7c1e.js";var u="/assets/images/visuals/glowing-texture/eraser.png",k="/assets/images/visuals/glowing-texture/opacity.png",m="/assets/images/visuals/glowing-texture/erase-pixels.png",b="/assets/images/visuals/glowing-texture/pig.png",d="/assets/images/visuals/glowing-texture/result.png";const A='{"title":"Glowing Entity Texture","description":"","frontmatter":{"title":"Glowing Entity Texture","category":"Tutorials","mention":["LeGend077"]},"headers":[{"level":2,"title":"Texture","slug":"texture"},{"level":2,"title":"Material","slug":"material"},{"level":2,"title":"Testing","slug":"testing"}],"relativePath":"visuals/glowing-texture.md"}',g={},_=p('<p>In this tutorial, you will learn how to make a glowing texture, like enderman&#39;s eyes have for an entity by using materials and textures.</p><h2 id="texture" tabindex="-1">Texture <a class="header-anchor" href="#texture" aria-hidden="true">#</a></h2><p>To make your entity&#39;s texture glow, you need to open your texture in an advanced image editor (here, Blockbench) to half-erase the pixels alpha.</p><ul><li>Open your entity&#39;s texture file.</li></ul><p><em>Don&#39;t mind strange bones rotation, mojang likes to render models correctly through animations.</em></p><ul><li>Find the <strong>Eraser</strong> tool and set it&#39;s opacity/alpha to something low like 71 or 23.</li></ul><p><img src="'+u+'" alt=""></p><p><img src="'+k+'" alt=""></p><ul><li>Then, erase the part of the texture you want it to glow. The less visible a pixel is the more it glows, but be sure it is not 100% erased.</li></ul><p><img src="'+m+'" alt=""></p><p>Example Pig texture:</p><p><img src="'+b+'" alt=""></p><h2 id="material" tabindex="-1">Material <a class="header-anchor" href="#material" aria-hidden="true">#</a></h2><p>We need to modify the <code>RP/entity/my_entity.entity.json</code> file of the mob we want to glow. Now, find <code>&quot;materials&quot;:{}</code> and set the values to <code>&quot;entity_emissive_alpha&quot;</code>. (Be sure to check if the textures are properly defined).</p>',14),y=n("RP/entity/pig.entity.json#description"),h=p(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;materials&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity_emissive_alpha&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),x=n("RP/entity/pig.entity.json"),f=t("div",{class:"language-json line-numbers-mode"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token property"},'"format_version"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"1.10.0"'),t("span",{class:"token punctuation"},","),n(`
	`),t("span",{class:"token property"},'"minecraft:client_entity"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token property"},'"description"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token property"},'"identifier"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"minecraft:pig"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"min_engine_version"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"1.8.0"'),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"materials"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"entity_emissive_alpha"'),n(),t("span",{class:"token comment"},'// replace "pig" with "entity_emissive_alpha"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"textures"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"textures/entity/pig/pig"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"saddled"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"textures/entity/pig/pig_saddle"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"geometry"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"default"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"geometry.pig.v1.8"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"animations"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"setup"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"animation.pig.setup"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"walk"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"animation.quadruped.walk"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"look_at_target"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"animation.common.look_at_target"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"baby_transform"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"animation.pig.baby_transform"'),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"scripts"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"animate"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n(`
					`),t("span",{class:"token string"},'"setup"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"walk"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"query.modified_move_speed"'),n(`
					`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token string"},'"look_at_target"'),t("span",{class:"token punctuation"},","),n(`
					`),t("span",{class:"token punctuation"},"{"),n(`
						`),t("span",{class:"token property"},'"baby_transform"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"query.is_baby"'),n(`
					`),t("span",{class:"token punctuation"},"}"),n(`
				`),t("span",{class:"token punctuation"},"]"),n(`
			`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"render_controllers"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},'"controller.render.pig"'),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
			`),t("span",{class:"token property"},'"spawn_egg"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
				`),t("span",{class:"token property"},'"texture"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"spawn_egg"'),t("span",{class:"token punctuation"},","),n(`
				`),t("span",{class:"token property"},'"texture_index"'),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"2"),n(`
			`),t("span",{class:"token punctuation"},"}"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("div",{class:"line-numbers-wrapper"},[t("span",{class:"line-number"},"1"),t("br"),t("span",{class:"line-number"},"2"),t("br"),t("span",{class:"line-number"},"3"),t("br"),t("span",{class:"line-number"},"4"),t("br"),t("span",{class:"line-number"},"5"),t("br"),t("span",{class:"line-number"},"6"),t("br"),t("span",{class:"line-number"},"7"),t("br"),t("span",{class:"line-number"},"8"),t("br"),t("span",{class:"line-number"},"9"),t("br"),t("span",{class:"line-number"},"10"),t("br"),t("span",{class:"line-number"},"11"),t("br"),t("span",{class:"line-number"},"12"),t("br"),t("span",{class:"line-number"},"13"),t("br"),t("span",{class:"line-number"},"14"),t("br"),t("span",{class:"line-number"},"15"),t("br"),t("span",{class:"line-number"},"16"),t("br"),t("span",{class:"line-number"},"17"),t("br"),t("span",{class:"line-number"},"18"),t("br"),t("span",{class:"line-number"},"19"),t("br"),t("span",{class:"line-number"},"20"),t("br"),t("span",{class:"line-number"},"21"),t("br"),t("span",{class:"line-number"},"22"),t("br"),t("span",{class:"line-number"},"23"),t("br"),t("span",{class:"line-number"},"24"),t("br"),t("span",{class:"line-number"},"25"),t("br"),t("span",{class:"line-number"},"26"),t("br"),t("span",{class:"line-number"},"27"),t("br"),t("span",{class:"line-number"},"28"),t("br"),t("span",{class:"line-number"},"29"),t("br"),t("span",{class:"line-number"},"30"),t("br"),t("span",{class:"line-number"},"31"),t("br"),t("span",{class:"line-number"},"32"),t("br"),t("span",{class:"line-number"},"33"),t("br"),t("span",{class:"line-number"},"34"),t("br"),t("span",{class:"line-number"},"35"),t("br"),t("span",{class:"line-number"},"36"),t("br"),t("span",{class:"line-number"},"37"),t("br"),t("span",{class:"line-number"},"38"),t("br"),t("span",{class:"line-number"},"39"),t("br"),t("span",{class:"line-number"},"40"),t("br"),t("span",{class:"line-number"},"41"),t("br"),t("span",{class:"line-number"},"42"),t("br")])],-1),v=t("h2",{id:"testing",tabindex:"-1"},[n("Testing "),t("a",{class:"header-anchor",href:"#testing","aria-hidden":"true"},"#")],-1),w=t("p",null,[n("Now, load up Minecraft and open a word with this resource pack enabled. Set the time to "),t("em",null,"midnight"),n(" or find a nearby cave and test it out. The entity should glow as expected.")],-1),T=t("p",null,[t("img",{src:d,alt:""})],-1);function q(P,S,E,C,N,V){const a=o("CodeHeader"),r=o("Spoiler");return c(),i("div",null,[_,s(a,null,{default:e(()=>[y]),_:1}),h,s(r,{title:"Example Pig Entity File"},{default:e(()=>[s(a,null,{default:e(()=>[x]),_:1}),f]),_:1}),v,w,T])}var B=l(g,[["render",q]]);export{A as __pageData,B as default};
