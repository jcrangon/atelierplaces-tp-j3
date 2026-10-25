<?php

declare(strict_types=1);

/** Affichage simple d'un résumé d'atelier. */
final class WorkshopSummary
{
    /**
     * @param array{title:string,capacity:int,attendees:list<string>} $workshop
     */
    public static function format(array $workshop): string
    {
        $count = count($workshop['attendees']);

        return 'Atelier : '.$workshop['title'].' — '.$count.'/'.$workshop['capacity'].' inscrits';
    }
}
