<script lang="ts">
  export let href: string;
</script>

<a class="{$$props.class}" href="{href}" target="_blank" rel="noopener noreferrer">
  <slot />
</a>
