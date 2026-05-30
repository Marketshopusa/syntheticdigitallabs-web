$content = Get-Content -Path style.css
Write-Output "Searching for 'nova' or 'avatar' in style.css:"
for ($i = 0; $i -lt $content.Length; $i++) {
    if ($content[$i] -match "nova" -or $content[$i] -match "avatar") {
        $lineNum = $i + 1
        $trimmed = $content[$i].Trim()
        Write-Output "$lineNum: $trimmed"
    }
}
