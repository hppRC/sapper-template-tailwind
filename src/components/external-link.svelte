<script lang="ts">
  export let href: string;
  export let className: string | undefined;
</script>

<a class="{className}" href="{href}" target="_blank" rel="noopener noreferrer" aria-label="{href}">
  <slot />
</a>
