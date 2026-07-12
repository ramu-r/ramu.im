---
title: "Simplicity and tech adoption"
description: "Comparing tech adoption between React and Claude Code."
date: "2026-06-25"
---

[This nx.dev piece](https://nx.dev/blog/meta-harnesses-agents-and-lessons-from-the-framework-wars) credits React's win to doing less than its rivals. I read it the other way. React won because there were fewer pieces to hold in your head, even when it could do everything angular could do.

With Backbone or Ember.js you had to learn controllers, services, directives. React asked you to learn components and state. You could build Facebook on just useState and useEffect before reaching for anything else. It was the easier mental model that helped React win. Anyone who programmed during the jQuery era would remember the mental overhead of keeping frontend javascript coherent. React simply took away all of that. You just had to maintain state, and React took care of everything else.

Sadly, the tech world is going in the opposite direction, React included. With Anthropic and co, they've made a chat as complex as it can be. I have to juggle in my mind plans and pricing, daily and weekly limits, models, different modes, memories, skills, harnesses, compressing context, forking conversations, I can keep going with this list, and Claude Code is supposed to be a batteries included complete product compared to something like the pi harness. I still remember early adopters talking about tokens burning up too fast and all the things they had to manage about the conversation. They were saying it should be Claude Code's job to manage all this internaly.

But it's not just Anthropic, React which I loved for its simplicity is going down a route where the api surface area is so big, it'd be bewildering for a newcomer. Most people complain about Server Components, which I find no issue with, I can understand the reasoning behind it. But lately there's been so many concepts being introduced on the client side, it's taking away the simplicity React once had. Luckily it's all backward compatible and someone can go a very long way with a smaller subset before having to reach for the wider set.
