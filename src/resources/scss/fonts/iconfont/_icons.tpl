@font-face {
    font-family: "<%= fontName %>";
    src: url('<%= fontPath %><%= fontName %>.eot');
    src: url('<%= fontPath %><%= fontName %>.eot?#iefix') format('eot'),
    url('<%= fontPath %><%= fontName %>.woff') format('woff'),
    url('<%= fontPath %><%= fontName %>.ttf') format('truetype'),
    url('<%= fontPath %><%= fontName %>.svg#<%= fontName %>') format('svg');
}

@function icon-char($filename) {
    $char: "";
<% _.each(glyphs, function(glyph) { %>
@if $filename == to-lower-case("<%= glyph.fileName %>") {
$char: "\<%= glyph.codePoint %>";
}<% }); %>

    @return $char;
}

[class^="icon-"], [class*=" icon-"] {
    &:before {
        @include icon-styles;
    }
}

<% _.each(glyphs, function(glyph) { %>
    .icon-#{to-lower-case("<%= glyph.fileName %>")} {
        &:before {
            @include icon(to-lower-case("<%= glyph.fileName %>"));
        }
    }
<% }); %>