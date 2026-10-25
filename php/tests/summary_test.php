<?php

declare(strict_types=1);

require_once __DIR__.'/../src/WorkshopSummary.php';

$workshop = [
    'title' => 'Initiation Git',
    'capacity' => 3,
    'attendees' => ['Nina', 'Malo'],
];
$expected = 'Atelier : Initiation Git — 2/3 inscrits';
$actual = WorkshopSummary::format($workshop);

if ($actual !== $expected) {
    fwrite(STDERR, "PHP TEST FAILED\nExpected: $expected\nActual: $actual\n");
    exit(1);
}

echo "PHP TESTS: OK\n";
